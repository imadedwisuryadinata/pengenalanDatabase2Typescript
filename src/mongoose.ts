import mongoose from 'mongoose'

//customer
export type CustomerType = {
  first_name: string
	last_name: string
	age: number
	customer_type: string
	street: string
	city: string
	state: string
	zip_code: string
	phone_number: string
}

export type CustomerDocument = mongoose.Document & CustomerType

//schema definition
const CustomerSchema = new mongoose.Schema({
  first_name: String,
	last_name: String,
	age: Number,
	customer_type: String,
	street: String,
	city: String,
	state: String,
	zip_code: {type: String, required : true},
	phone_number: {type : String, default : '000000'}
})

export class Customer {
  private model: mongoose.Model<CustomerDocument>

  constructor() {
    this.model = mongoose.model('customer', CustomerSchema)
  }

  async create(data: CustomerType) {
    try {
      const result = await this.model.create(data)
      console.log(`Insert result %j`, result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let customers: CustomerType[]
    try {
      customers = await this.model.find({})
    } catch (error) {
      throw error
    }

    return customers
  }

  async getByID(customerID: string) {
    let customer: CustomerType | null
    try {
      customer = await this.model.findById(customerID)
    } catch (error) {
      throw error
    }

    return customer
  }

  async update(customerID: string, data: Partial<CustomerType>) {
    try {
      await this.model.findByIdAndUpdate(customerID, { $set: data })
    } catch (error) {
      throw error
    }
  }

  async delete(customerID: string) {
    try {
      await this.model.findByIdAndDelete(customerID)
    } catch (error) {
      throw error
    }
  }
}


//account
export type AccountType = {
  account_number: string
	balance : number
	account_type: string
}

export type AccountDocument = mongoose.Document & AccountType

//schema definition
const AccountSchema = new mongoose.Schema({
  account_number: String,
	balance : Number,
	account_type: String,
})

export class Account {
  private model: mongoose.Model<AccountDocument>

  constructor() {
    this.model = mongoose.model('account', AccountSchema)
  }

  async create(data2: AccountType) {
    try {
      const result = await this.model.create(data2)
      console.log(`Insert result %j`, result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let accounts: AccountType[]
    try {
      accounts = await this.model.find({})
    } catch (error) {
      throw error
    }

    return accounts
  }

  async getByID(accountID: string) {
    let account: AccountType | null
    try {
      account = await this.model.findById(accountID)
    } catch (error) {
      throw error
    }

    return account
  }

  async update(accountID: string, data2: Partial<AccountType>) {
    try {
      await this.model.findByIdAndUpdate(accountID, { $set: data2 })
    } catch (error) {
      throw error
    }
  }

  async delete(accountID: string) {
    try {
      await this.model.findByIdAndDelete(accountID)
    } catch (error) {
      throw error
    }
  }
}


//transactions
export type TransactionType = {
  ammount: number
	date : Date
	description: string
}

export type TransactionDocument = mongoose.Document & TransactionType

//schema definition
const TransactionSchema = new mongoose.Schema({
  ammount: Number,
	date : Date,
	description: String,
})

export class Transaction {
  private model: mongoose.Model<TransactionDocument>

  constructor() {
    this.model = mongoose.model('transaaction', TransactionSchema)
  }

  async create(data3: TransactionType) {
    try {
      const result = await this.model.create(data3)
      console.log(`Insert result %j`, result)
    } catch (error) {
      throw error
    }
  }

  async getAll() {
    let transactions: TransactionType[]
    try {
      transactions = await this.model.find({})
    } catch (error) {
      throw error
    }

    return transactions
  }

  async getByID(transactionID: string) {
    let transaction: TransactionType | null
    try {
      transaction = await this.model.findById(transactionID)
    } catch (error) {
      throw error
    }

    return transaction
  }

  async update(transactionID: string, data3: Partial<CustomerType>) {
    try {
      await this.model.findByIdAndUpdate(transactionID, { $set: data3 })
    } catch (error) {
      throw error
    }
  }

  async delete(transactionID: string) {
    try {
      await this.model.findByIdAndDelete(transactionID)
    } catch (error) {
      throw error
    }
  }
}