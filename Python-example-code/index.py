# Simple Python Demo Code

# Function to greet a user
def greet(name):
    return f"Hello, {name}! Welcome to Python demo 🚀"

# A class to represent a Person
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def celebrate_birthday(self):
        self.age += 1
        print(f"Happy Birthday {self.name}! You are now {self.age} 🎂")

# Using the function
print(greet("Smeet"))

# Creating a list of numbers and printing squares
numbers = [1, 2, 3, 4, 5]
squares = [n**2 for n in numbers]
print("Squares:", squares)

# Using the class
person = Person("Smeet", 24)
person.celebrate_birthday()
