Feature: Add to Cart Test
Background:
    Given the user navigates to the application
    And the user clicks login button

Scenario Outline: Login should be success
    Given the user enter the username as
    And the user enter the password as
    When the user click on the login button
    When the user search for the product
    And the user add the book to the cart
    Then the product should be added to the cart
