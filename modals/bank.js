
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const  BankSchema = new  Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    accounts: [
        {accountId: {
            required: true, type: Schema.Types.ObjectId, ref: "Account"
        }}
    ]
});
const BankModal = mongoose.model("Bank", BankSchema);
module.exports = BankModal;
// let bankDb = require("./db");
// class bankModal {
//     constructor({name,location,branch,phone,address,accountNumber}){
//         this.name = name;
//         this.location = location;
//         this.branch = branch;
//         this.phone = phone;
//         this.address = address;
//         this.accountNumber = accountNumber;
//     }
//     save(){
//         bankDb.push(this);
//         return this;
//     }
//     static all(){
//         return bankDb;          
//     }
//     static update(updatedInfo = {}){
//       bankDb =  bankDb.map(bank =>{
//             if(bank.name === updatedInfo.name){
//                 return {...bank, ...updatedInfo};
//             }
//             return bank;
//         })
//     }
//     static delete({name}){
//         let deletedBank = null;
//        bankDb = bankDb.filter(bank =>{
//             if(bank.name !== name){
//                 return true;ß
//             }
//             deletedBank = bank;
//             return false;
//         });
//         return deletedBank;
//     }
// };
// module.exports = bankModal;