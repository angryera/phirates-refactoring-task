/**
 * Created a class Expense to encapsulate the properties and methods related to an expense.
 * Moved the switch statement for getting the expense name and the over expense check into the Expense class as methods.
 * Replaced the type object with an ExpenseType object to make it more consistent with the object-oriented approach.
 * Updated the report function to work with the new Expense objects.
 * Renamed Expenses to getExpenses for clarity and to follow the naming convention of functions.
 */

class Expense {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }

    getType() {
        return this.type;
    }

    getAmount() {
        return this.amount;
    }

    getExpenseName() {
        switch (this.type) {
            case ExpenseType.DINNER:
                return "Dinner";
            case ExpenseType.BREAKFAST:
                return "Breakfast";
            case ExpenseType.LUNCH:
                return "Lunch";
            case ExpenseType.CAR_RENTAL:
                return "Car Rental";
            default:
                return "Unknown";
        }
    }

    isOverExpense() {
        return (this.type === ExpenseType.DINNER && this.amount > 100) ||
            (this.type === ExpenseType.LUNCH && this.amount > 50) ||
            (this.type === ExpenseType.BREAKFAST && this.amount > 20);
    }
}

const ExpenseType = {
    BREAKFAST: 1,
    LUNCH: 2,
    DINNER: 3,
    CAR_RENTAL: 4
};

function getExpenses() {
    return [
        new Expense(ExpenseType.BREAKFAST, 15.20),
        new Expense(ExpenseType.BREAKFAST, 28.10),
        new Expense(ExpenseType.LUNCH, 10.20),
        new Expense(ExpenseType.DINNER, 16.00),
        new Expense(ExpenseType.DINNER, 120.20)
    ];
}

function report(expenses) {
    let total = 0;
    let mealExpenses = 0;

    console.info("Today Travel Expenses " + new Date().toISOString().slice(0, 10));

    for (const expense of expenses) {
        if (expense.getType() === ExpenseType.DINNER || expense.getType() === ExpenseType.BREAKFAST) {
            mealExpenses += expense.getAmount();
        }

        const expenseName = expense.getExpenseName();
        const mealOverExpensesMarker = expense.isOverExpense() ? "[over-expense!]" : " ";

        console.info(expenseName + "\t" + expense.getAmount() + "eur" + "\t" + mealOverExpensesMarker);
        total += expense.getAmount();
    }

    console.info("Meal expenses: " + mealExpenses + "eur");
    console.info("Total expenses: " + total + "eur");
}

report(getExpenses());