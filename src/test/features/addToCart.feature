Feature: Add to Cart Test
Background:
    Given the user navigates to the application
    And the user clicks login button

Scenario Outline: Login should be success
    Given the user enter the username as "<username>"
    And the user enter the password as "<password>"
    When the user click on the login button
    When the user search for the product "<pro_name>"
    And the user add the book to the cart
    Then the product should be added to the cart
    

Examples:
    | username     | password   | pro_name                                |
    | demouser001  | Demo123@   |harry potter and the chamber of secrets  |
    | demouser002  | Demo123@   |harry potter and the chamber of secrets  | 
