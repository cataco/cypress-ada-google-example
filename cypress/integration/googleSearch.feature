Feature: Search in Google

  Scenario: Load Google Home Page
    Given I open Google page
    When I see "Google" icon
    Then I see the search bar
    And I can type in alphanumeric values in the search bar

