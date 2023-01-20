# Projet de dataviz : Visualisation de Pokémon
## Description
Ce projet a pour but de créer une visualisation des Pokémon à partir de deux jeux de données provenant de Kaggle. Il est divisé en trois parties :

### Github Pages : https://alihaydar8.github.io/DataViz/index.html

## Partie 1 : Bubble Chart

La première partie de ce projet utilise un graphique en bulles pour visualiser les différentes caractéristiques des Pokémon. Chaque bulle représente un Pokémon avec sa taille déterminée par la valeur "total" de chaque Pokémon, qui est un indicateur de sa puissance globale. Chaque bulle a également une couleur qui correspond au type principal du Pokémon. Les bulles sont disposées en utilisant les coordonnées x et y pour montrer les relations entre les différentes caractéristiques des Pokémon. Il existe également une légende de type de couleur pour aider à identifier les types de Pokémon. Les fonctions suivantes sont également disponibles :

- Ajout d'images des Pokémons dans les bulles
- Groupement des Pokémons en fonction de leurs types

Pour utiliser cette partie du projet, veuillez vous référer à la fonction createBubbleChart() dans le code source.

disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/bubble&imageChart.html

## Partie 2 : Radar Chart


disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/radarChart.html

## Partie 3 : Pie Chart

disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/pieChart.html



# Données

- Les informations sur les Pokémon sont disponibles à l'adresse suivante : https://www.kaggle.com/datasets/abcsds/pokemon
- Les images des Pokémon sont disponibles à l'adresse suivante : https://www.kaggle.com/datasets/vishalsubbiah/pokemon-images-and-types

### colonnes
- #: ID pour chaque pokémon
- Name: Nom de chaque pokémon
- Type 1: Chaque pokémon a un type, cela détermine les faiblesses / résistances aux attaques
- Type 2: Certains pokémons sont de type double et ont 2 types
- Total: somme de toutes les statistiques qui suivent, une indication générale de la force d'un pokémon
- HP: points de vie, ou santé, définit combien de dégâts un pokémon peut subir avant de s'évanouir
- Attack: le modificateur de base pour les attaques normales (par exemple. Gratter, Poing)
- Defense: la résistance aux dégâts de base contre les attaques normales
- SP Atk: attaque spéciale, le modificateur de base pour les attaques spéciales (par exemple. fire blast, bubble beam)
- SP Def: la résistance aux dégâts de base contre les attaques spéciales
- Speed: détermine lequel des pokémons attaque en premier chaque tour.
  
### type 
  - <img alt="" src="https://www.pokepedia.fr/images/4/40/Miniature_Type_T%C3%A9racristal_Normal_EV.png" width="60" height="20" /> 
    Les Pokémon de type normal sont souvent des Pokémon de base qui ont peu d'affinités élémentaires.

  - <img alt="" src="https://www.pokepedia.fr/images/5/50/Miniature_Type_T%C3%A9racristal_Combat_EV.png" width="60" height="20" />
    Les Pokémon de type combat sont souvent forts physiquement et
          ont des attaques de type combat.

  - <img alt="" src="https://www.pokepedia.fr/images/2/22/Miniature_Type_T%C3%A9racristal_Vol_EV.png" width="60" height="20" />
    Les Pokémon de type vol peuvent voler et ont souvent des
          attaques aériennes.

  - <img alt="" src="https://www.pokepedia.fr/images/5/5e/Miniature_Type_T%C3%A9racristal_Poison_EV.png" width="60" height="20" />
    Les Pokémon de type poison peuvent infliger des dégâts à
          leurs adversaires et ont souvent des attaques de type poison.

  - <img alt="" src="https://www.pokepedia.fr/images/9/9f/Miniature_Type_T%C3%A9racristal_Sol_EV.png" width="60" height="20" />
    Les Pokémon de type sol sont souvent forts physiquement et ont
          des attaques de type sol.
  - <img alt="" src="https://www.pokepedia.fr/images/1/1e/Miniature_Type_T%C3%A9racristal_Feu_EV.png" width="60" height="20" />
    Les Pokémon de type feu ont des attaques de type feu et sont
          souvent forts contre les Pokémon de type plante.
  - <img alt="" src="https://www.pokepedia.fr/images/1/19/Miniature_Type_T%C3%A9racristal_Eau_EV.png" width="60" height="20" />
    Les Pokémon de type eau ont des attaques de type eau et sont
          souvent forts contre les Pokémon de type feu.
  - <img alt="" src="https://www.pokepedia.fr/images/3/39/Miniature_Type_T%C3%A9racristal_Plante_EV.png" width="60" height="20" />
    Les Pokémon de type plante ont des attaques de type plante et
          sont souvent forts contre les Pokémon de type eau.
  - <img alt="" src="https://www.pokepedia.fr/images/c/c2/Miniature_Type_T%C3%A9racristal_%C3%89lectrik_EV.png"  width="60" height="20" />
    Les Pokémon de type électrique ont des attaques de type
          électrique et sont souvent forts contre les Pokémon de type eau.
  - <img alt="" src="https://www.pokepedia.fr/images/d/dc/Miniature_Type_T%C3%A9racristal_Psy_EV.png"  width="60" height="20" />
    Les Pokémon de type psychique ont des attaques de type
          psychique et sont souvent forts contre les Pokémon de type combat.
  - <img alt="" src="https://www.pokepedia.fr/images/c/c4/Miniature_Type_T%C3%A9racristal_Glace_EV.png"  width="60" height="20" />
    Les Pokémon de type glace ont des attaques de type glace et
          sont souvent forts contre les Pokémon de type dragon.
  - <img alt="" src="https://www.pokepedia.fr/images/1/1d/Miniature_Type_T%C3%A9racristal_Dragon_EV.png" width="60" height="20" />
    Les Pokémon de type dragon ont des attaques de type dragon et
          sont souvent forts contre les Pokémon de type dragon.
  - <img alt="" src="https://www.pokepedia.fr/images/e/e4/Miniature_Type_T%C3%A9racristal_T%C3%A9n%C3%A8bres_EV.png" width="60" height="20" />
    Les Pokémon de type ténèbres ont des attaques de type
          ténèbres et sont souvent forts contre les Pokémon de type psychique.
  - <img alt="" src="https://www.pokepedia.fr/images/f/f3/Miniature_Type_T%C3%A9racristal_Acier_EV.png" width="60" height="20" />
    Les Pokémon de type acier ont des attaques de type acier et
          sont souvent forts contre les Pokémon de type dragon.
  - <img alt="" src="https://www.pokepedia.fr/images/9/9a/Miniature_Type_T%C3%A9racristal_F%C3%A9e_EV.png" width="60" height="20" />
    Les Pokémon de type fée ont des attaques de type fée et sont
          souvent forts contre les Pokémon de type dragon.


# Utilisation
Ce projet a été réalisé dans le contexte d'un module de dataviz à l'école.

# Contributeurs
- [Alihaydar8](https://github.com/alihaydar8)
- [mir-ak](https://github.com/mir-ak)

# Remarques
Le jeu de données original comprenant 700 Pokémon a été modifié pour ne conserver que 500 Pokémon afin d'obtenir une meilleure visualisation.
