# filename: names_manager.py

FILE_NAME = "names.txt"

def load_names():
    """Read all names from the file into a list."""
    try:
        with open(FILE_NAME, "r") as f:
            return [line.strip() for line in f.readlines()]
    except FileNotFoundError:
        return []


def save_name(name):
    """Append a new name to the file."""
    with open(FILE_NAME, "a") as f:
        f.write(name + "\n")


def list_names():
    """Print all names from the file."""
    names = load_names()
    if not names:
        print("No names found.")
    else:
        print("\n--- Names List ---")
        for i, name in enumerate(names, start=1):
            print(f"{i}. {name}")
        print("------------------\n")


def main():
    while True:
        print("Choose an option:")
        print("1. Add a name")
        print("2. List all names")
        print("3. Quit")

        choice = input("Enter your choice (1/2/3): ").strip()

        if choice == "1":
            name = input("Enter a name: ").strip()
            if name:
                save_name(name)
                print(f"✅ {name} added successfully!\n")
            else:
                print("⚠️ Name cannot be empty.\n")

        elif choice == "2":
            list_names()

        elif choice == "3":
            print("Goodbye!")
            break

        else:
            print("Invalid choice. Please enter 1, 2, or 3.\n")


if __name__ == "__main__":
    main()

