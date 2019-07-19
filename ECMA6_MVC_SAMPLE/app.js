// ============== Model =========================
const contactsData = [
    {
      'fname': 'Anbu',
      'lname': 'Arasan',
      'phone': '190-309-6101',
      'email': 'anbu.arasan@email.com'
    },
    {
      'fname': 'Arivu',
      'lname': 'Mugilan',
      'phone': '490-701-7102',
      'email': 'arivu.mugilan@email.com'
    },
    {
      'fname': 'Bob',
      'lname': 'Johnson',
      'phone': '574-909-3948',
      'email': 'bob.johnson@email.com'
    },
    {
      'fname': 'Raja',
      'lname': 'Tamil',
      'phone': '090-909-0101',
      'email': 'raja.tamil@email.com'
    },
    {
      'fname': 'Sundar',
      'lname': 'Kannan',
      'phone': '090-909-0101',
      'email': 'sundar.kannan@email.com'
    }
  ]
  //================ Controller ==================
class AddressBookCtrl {
	constructor(addressBookView) {
        this.addressBookView = addressBookView;
        
	}
        init() {
            this.addressBookView.init();
           
        }
        
}
// ============== View ========================= 
class AddressBookView {
	init() {
           console.log("render HTML here");
        }
}
// create an object from the class AddressBookView
const addressBookView = new AddressBookView();

// create an object from AddressBookCtrl and passing addressBookView in the constructor as a dependent
const addressBookApp = new AddressBookCtrl(addressBookView);

// App starting...
addressBookApp.init();