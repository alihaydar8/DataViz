function createBubbleChart(pokemon) {
  var totals = pokemon.map(function (pokemon) {
    return +pokemon.total;
  });
  var totalExtent = d3.extent(totals);
  var types = d3.set(
    pokemon.map(function (pokemon) {
      return pokemon.type1;
    })
  );
  var typeColorScale = d3
    .scaleOrdinal(d3.schemeCategory20)
    .domain(types.values());

  var width = 1800,
    height = 1100;
  var svg,
    circles,
    circleSize = { min: 14, max: 22 };
  var circleRadiusScale = d3
    .scaleSqrt()
    .domain(totalExtent)
    .range([circleSize.min, circleSize.max]);

  var forces, forceSimulation;

  createSVG();
  toggleContinentKey(!imageFill());
  createCircles();
  createForces();
  createForceSimulation();
  addImagesDefinitions();
  addFillListener();
  addGroupingListeners();

  function createSVG() {
    svg = d3
      .select("#bubble-chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);
  }

  function toggleContinentKey(showContinentKey) {
    var keyElementWidth = 80,
      keyElementHeight = 30;
    var onScreenYOffset = keyElementHeight * 1.5,
      offScreenYOffset = 100;

    if (d3.select(".continent-key").empty()) {
      createContinentKey();
    }
    var continentKey = d3.select(".continent-key");

    if (showContinentKey) {
      translateContinentKey("translate(0," + (height - onScreenYOffset) + ")");
    } else {
      translateContinentKey("translate(0," + (height + offScreenYOffset) + ")");
    }

    function createContinentKey() {
      var keyWidth = keyElementWidth * types.values().length;
      var continentKeyScale = d3
        .scaleBand()
        .domain(types.values())
        .range([(width - keyWidth) / 2, (width + keyWidth) / 2]);

      svg
        .append("g")
        .attr("class", "continent-key")
        .attr("transform", "translate(0," + (height + offScreenYOffset) + ")")
        .selectAll("g")
        .data(types.values())
        .enter()
        .append("g")
        .attr("class", "continent-key-element");

      d3.selectAll("g.continent-key-element")
        .append("rect")
        .attr("width", keyElementWidth)
        .attr("height", keyElementHeight)
        .attr("x", function (d) {
          return continentKeyScale(d);
        })
        .attr("fill", function (d) {
          return typeColorScale(d);
        });

      d3.selectAll("g.continent-key-element")
        .append("text")
        .attr("text-anchor", "middle")
        .attr("x", function (d) {
          return continentKeyScale(d) + keyElementWidth / 2;
        })
        .text(function (d) {
          return d;
        });

      // The text BBox has non-zero values only after rendering
      d3.selectAll("g.continent-key-element text").attr("y", function (d) {
        var textHeight = this.getBBox().height;
        // The BBox.height property includes some extra height we need to remove
        var unneededTextHeight = 4;
        return (keyElementHeight + textHeight) / 2 - unneededTextHeight;
      });
    }

    function translateContinentKey(translation) {
      continentKey.transition().duration(500).attr("transform", translation);
    }
  }

  function imageFill() {
    return isChecked("#images");
  }

  function isChecked(elementID) {
    return d3.select(elementID).property("checked");
  }

  function createCircles() {
    var formatTotal = d3.format(",");
    circles = svg
      .selectAll("circle")
      .data(pokemon)
      .enter()
      .append("circle")
      .attr("r", function (d) {
        return circleRadiusScale(d.total);
      })
      .on("mouseover", function (d) {
        updatePokemonInfo(d);
      })
      .on("mouseout", function (d) {
        updatePokemonInfo();
      });
    updateCircles();

    function updatePokemonInfo(pokemon) {
      var info = "";
      if (pokemon) {
        info =
          pokemon.name +
          "(" +
          pokemon.type1 +
          ") : " +
          formatTotal(pokemon.total);
      }
      d3.select("#pokemon-info").html(info);
    }
  }

  function updateCircles() {
    circles.attr("fill", function (d) {
      return imageFill() ? "url(#" + d.name + ")" : typeColorScale(d.type1);
    });
  }

  function createForces() {
    var forceStrength = 0.05;

    forces = {
      combine: createCombineForces(),
      continent: createContinentForces(),
      total: createTotalForces(),
    };

    function createCombineForces() {
      return {
        x: d3.forceX(width / 2).strength(forceStrength),
        y: d3.forceY(height / 2).strength(forceStrength),
      };
    }

    function createContinentForces() {
      return {
        x: d3.forceX(continentForceX).strength(forceStrength),
        y: d3.forceY(continentForceY).strength(forceStrength),
      };

      function continentForceX(d) {
        if (d.type1 === "Fire" || d.type1 === "Water" || d.type1 === "Bug") {
          return left(width);
        } else if (
          d.type1 === "Ground" ||
          d.type1 === "Grass" ||
          d.type1 === "Normal"
        ) {
          return right(width);
        } else if (
          d.type1 === "Rock" ||
          d.type1 === "Electric" ||
          d.type1 === "Poison"
        ) {
          return leftt(width);
        } else if (
          d.type1 === "Ice" ||
          d.type1 === "Steel" ||
          d.type1 === "Psychic"
        ) {
          return rightt(width);
        }
        return center(width);
      }

      function continentForceY(d) {
        if (
          d.type1 === "Fire" ||
          d.type1 === "Poison" ||
          d.type1 === "Ground" ||
          d.type1 === "Steel" ||
          d.type1 === "Ghost"
        ) {
          return top(height);
        } else if (
          d.type1 === "Water" ||
          d.type1 === "Electric" ||
          d.type1 === "Grass" ||
          d.type1 === "Psychic" ||
          d.type1 === "Dragon"
        ) {
          return bottom(height);
        }
        return center(height);
      }

      function center(dimension) {
        return dimension / 2;
      }
      function leftt(dimension) {
        return dimension / 3;
      }
      function right(dimension) {
        return (dimension / 8) * 7;
      }
      function rightt(dimension) {
        return (dimension / 11) * 7;
      }
      function left(dimension) {
        return dimension / 8;
      }
      function top(dimension) {
        return dimension / 8;
      }
      function bottom(dimension) {
        return (dimension / 8) * 7;
      }
    }

    function createTotalForces() {
      var continentNamesDomain = types.values().map(function (continentCode) {
        return continentCode;
      });
      var scaledtotalMargin = circleSize.max;

      totalScaleX = d3
        .scaleBand()
        .domain(continentNamesDomain)
        .range([scaledtotalMargin, width - scaledtotalMargin * 2]);
      totalScaleY = d3
        .scaleLog()
        .domain(totalExtent)
        .range([height - scaledtotalMargin, scaledtotalMargin * 2]);

      var centerCirclesInScaleBandOffset = totalScaleX.bandwidth() / 2;
      return {
        x: d3
          .forceX(function (d) {
            return totalScaleX(d.type1) + centerCirclesInScaleBandOffset;
          })
          .strength(forceStrength),
        y: d3
          .forceY(function (d) {
            return totalScaleY(d.total);
          })
          .strength(forceStrength),
      };
    }
  }

  function createForceSimulation() {
    forceSimulation = d3
      .forceSimulation()
      .force("x", forces.combine.x)
      .force("y", forces.combine.y)
      .force("collide", d3.forceCollide(forceCollide));
    forceSimulation.nodes(pokemon).on("tick", function () {
      circles
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    });
  }

  function forceCollide(d) {
    return totalGrouping() ? 0 : circleRadiusScale(d.total) + 1;
  }

  function totalGrouping() {
    return isChecked("#total-score");
  }

  function addImagesDefinitions() {
    var defs = svg.append("defs");
    defs
      .selectAll(".image")
      .data(pokemon)
      .enter()
      .append("pattern")
      .attr("id", function (d) {
        return d.name;
      })
      .attr("class", "image")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("patternContentUnits", "objectBoundingBox")
      .append("image")
      .attr("width", 1)
      .attr("height", 1)
      // xMidYMid: center the image in the circle
      // slice: scale the image to fill the circle
      .attr("preserveAspectRatio", "xMidYMid slice")
      .attr("xlink:href", function (d) {
        return "images/" + d.name.toLocaleLowerCase() + ".png";
      });
  }

  function addFillListener() {
    d3.selectAll('input[name="fill"]').on("change", function () {
      toggleContinentKey(!imageFill() && !totalGrouping());
      updateCircles();
    });
  }

  function addGroupingListeners() {
    addListener("#combine", forces.combine);
    // addListener("#country-centers", forces.countryCenters);
    addListener("#categories", forces.continent);
    addListener("#total-score", forces.total);

    function addListener(selector, forces) {
      d3.select(selector).on("click", function () {
        updateForces(forces);
        toggleContinentKey(!imageFill() && !totalGrouping());
        toggleTotalAxes(totalGrouping());
      });
    }

    function updateForces(forces) {
      forceSimulation
        .force("x", forces.x)
        .force("y", forces.y)
        .force("collide", d3.forceCollide(forceCollide))
        .alphaTarget(0.5)
        .restart();
    }

    function toggleTotalAxes(showAxes) {
      var onScreenXOffset = 40,
        offScreenXOffset = -40;
      var onScreenYOffset = 40,
        offScreenYOffset = 100;

      if (d3.select(".x-axis").empty()) {
        createAxes();
      }
      var xAxis = d3.select(".x-axis"),
        yAxis = d3.select(".y-axis");

      if (showAxes) {
        translateAxis(xAxis, "translate(0," + (height - onScreenYOffset) + ")");
        translateAxis(yAxis, "translate(" + onScreenXOffset + ",0)");
      } else {
        translateAxis(
          xAxis,
          "translate(0," + (height + offScreenYOffset) + ")"
        );
        translateAxis(yAxis, "translate(" + offScreenXOffset + ",0)");
      }

      function createAxes() {
        var numberOfTicks = 10,
          tickFormat = ".0s";

        var xAxis = d3.axisBottom(totalScaleX).ticks(numberOfTicks, tickFormat);

        svg
          .append("g")
          .attr("class", "x-axis")
          .attr("transform", "translate(0," + (height + offScreenYOffset) + ")")
          .call(xAxis)
          .selectAll(".tick text")
          .attr("font-size", "16px");

        var yAxis = d3.axisLeft(totalScaleY).ticks(numberOfTicks, tickFormat);
        svg
          .append("g")
          .attr("class", "y-axis")
          .attr("transform", "translate(" + offScreenXOffset + ",0)")
          .call(yAxis);
      }

      function translateAxis(axis, translation) {
        axis.transition().duration(500).attr("transform", translation);
      }
    }
  }
}
