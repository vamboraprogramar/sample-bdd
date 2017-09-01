Feature: Searching for vote cards app
  As an internet user
  In order to find out more about the itunes vote cards app
  I want to be able to search for information about the itunes vote cards app

  Scenario: Google search for vote cards app
    Given I access Google page
    When I search Google for "teste"
    Then I should see product detail with title "teste - Pesquisa Google"