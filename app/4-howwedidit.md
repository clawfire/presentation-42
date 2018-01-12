# Du coup...

Il est important de distinguer :
- Les bonnes pratiques KPMG (sécurité, organisation, culture du risque) : oui!
- Les standards technologiques : risk assessment 


## Concevoir

- Dialogue permanent entre Tech et Business : product design/change management
- Un projet doit inclure de base:
  * une revue de sécurité, pen-test
  * classification des données traitées
  * valider les SLA attendus


## Industrialiser

- Standardiser l'architecture des applications
  * Exemple: externaliser la sécurité : OAuth2 provider (AzureAD) : Super pour du SPA, REST API, svc2svc, SLA, MFA, ...
  * Exemple: Rancher/Docker pour la ségrégation des applications 
- Standardiser nos processus de développement :
  * principe des 4 yeux : git-flow
  * CI/CD : immutabilité des releases


## Automatiser / Executer

- Hosting externe pour :
  * Avoir un IaaS supportant nos technos
  * Avoir du managed services pour la persistence (MongoDB)
  
- Logique software factory <=> execution platform :
  * DevOps : liberté vs. responsabilité
  * 1 Release =  gitflow ( 1 recette applicative + N images docker )
  * Rancher pour exécuter et maintenir la production


## Playground

![alt text](./app/sf2ops.png "Software Factory to Ops")
