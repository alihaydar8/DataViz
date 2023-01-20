# Projet de dataviz : Visualisation de Pokémon
## Description
Ce projet a pour but de créer une visualisation des Pokémon à partir de deux jeux de données provenant de Kaggle. Il est divisé en trois parties :


## Partie 1 : Bubble Chart

La première partie de ce projet utilise un graphique en bulles pour visualiser les différentes caractéristiques des Pokémon. Chaque bulle représente un Pokémon avec sa taille déterminée par la valeur "total" de chaque Pokémon, qui est un indicateur de sa puissance globale. Chaque bulle a également une couleur qui correspond au type principal du Pokémon. Les bulles sont disposées en utilisant les coordonnées x et y pour montrer les relations entre les différentes caractéristiques des Pokémon. Il existe également une légende de type de couleur pour aider à identifier les types de Pokémon. Les fonctions suivantes sont également disponibles :

- Ajout d'images des Pokémons dans les bulles
- Groupement des Pokémons en fonction de leurs types

Pour utiliser cette partie du projet, veuillez vous référer à la fonction createBubbleChart() dans le code source.

disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/index.html

## Partie 2 : Radar Chart


disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/radar.html

## Partie 3 : Pie Chart

disponible à l'adresse suivante: https://alihaydar8.github.io/DataViz/pie.html



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
  - ![image](https://www.pokepedia.fr/images/5/50/Miniature_Type_T%C3%A9racristal_Combat_EV.png)

# Utilisation
Ce projet a été réalisé dans le contexte d'un module de dataviz à l'école.

# Contributeurs
- [Alihaydar8](https://github.com/alihaydar8)
- [mir-ak](https://github.com/mir-ak)

# Remarques
Le jeu de données original comprenant 700 Pokémon a été modifié pour ne conserver que 500 Pokémon afin d'obtenir une meilleure visualisation.