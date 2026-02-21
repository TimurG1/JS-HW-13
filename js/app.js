/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  randomId() {
    return Math.floor(Math.random() * 10 )
  },

  createTransaction(amount, type) {
    return { id: this.randomId(), amount, type, }
    },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if (amount < 0) {
        console.log("Неможливо поповнити рахунок тпкою сумою")
    }
    this.balance += amount
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT)
    this.transactions.push(transaction)
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Зняття такої суми не можливо, недостатньо коштів.")
    } else {
      this.balance -= amount
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW)
      this.transactions.push(transaction)
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === transaction) {
        return transaction;
      }
    }
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let totalMoney = 0;
    for (obj of this.transactions) {
      const { amount, type: transactionType } = obj
      if (transactionType === type) {
        totalMoney += amount
      }
    }
  },
};
