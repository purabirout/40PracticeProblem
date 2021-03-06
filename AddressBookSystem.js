function createContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    
    const contact = new Map();

    contact.set("first_name", first_name);
    contact.set("last_name", last_name);
    contact.set("address", address);
    contact.set("city", city);
    contact.set("state", state);
    contact.set("zip", zip);
    contact.set("phone_no", phone_no);
    contact.set("email_id", email_id);
    return contact;
    
}

function createValidatedContact(first_name, last_name,address, city,state,zip , phone_no, email_id){
    /**
     * Creates a  new empty map
     */
    const contact = new Map();

    
    try{
        /**
         * validate first name 
         */
       
        let regex1 = RegExp("[A-Z][a-zA-Z]{2,}");
        result = regex1.test(first_name);
        if(result){
           
            /**
             * If first name validated, add first name into the map
             */
            contact.set("first_name", first_name);
        }
       
        /**
         * else throw error
         */
        else throw "Regex validation for first name failed"
        
        /**
         * validate last name 
         */
        let regex2 = RegExp("[A-Z][a-zA-Z]{2,}");
        result = regex2.test(last_name);
        if(result){
           
            /**
             * If last name validated, add last name into the map
             */
            contact.set("last_name", last_name);
        }
        /**
         * else throw error
         */
        else throw "Regex validation for last name failed"
        
        /**
         * validate address
         */
        let regex3 = RegExp("[a-zA-Z]{4,}");
        result = regex3.test(address);
        if(result){
            /**
             * If address validated, add address into the map
             */
            contact.set("address", address);
        }
        /**
         * else throw error
         */
        else throw "Regex validation for address failed.";
        
        /**
         * validate city
         */
        let regex4 = RegExp("[a-zA-Z]{4,}");
        result = regex4.test(city);
        if(result){
            /**
             * If city validated, add city into the map
             */
            contact.set("city", city);
        }else throw "Regex validation for city failed.";
        
        /**
         * validate state- minimum 4 characters required
         */
        let regex5 = RegExp("[a-zA-Z]{4,}");
        result = regex5.test(state);
        if(result){
            /**
             * If state validated, add state into the map
             */
            contact.set("state", state);
        }
        /**
         * else throw error
         */
        else throw "Regex validation for state failed." + state;
        
        /**
         * validate zip- special characters not allowed at beginning or end, total 6 digits with mid whitespace allowed
         */
        let regex6 = RegExp("^[1-9][0-9]{2}[\\s]?[0-9]{2}[0-9]$");
        result = regex6.test(zip);
        if(result){
            /**
             * If zip validated, add zip into the map
             */
            contact.set("zip", zip);
        }
        /**
         * Else throw error
         */
        else throw "Regex validation for zip failed.";
        
        /**
         * validate phone number- special characters not allowed at beginning or end, total 10 digits with mid whitespace allowed
         */
        let regex7 = RegExp("^[7-9][0-9]{4}[\\s]?[0-9]{4}[0-9]$");
        result = regex7.test(phone_no);
        if(result){
            /**
             * If phone number validated, add phone number into the map
             */
            contact.set("phone_no", phone_no);
        }      
        /**
         * Else throw error
         */
        else throw "Regex validation for phone number failed.";


        /**
         * validate email Id- minimum 3 characters before @, gmail.com after@ and optional 2 character of tld after .com
         */
        let regex8 = RegExp("([a-zA-Z0-9]{3,}|[a-zA-Z0-9]{3,}[+_.-]?[a-zA-Z0-9]{1,})[@]{1}[g][m][a][i][l](([.][c][o][m])|([.][c][o][m][.][a-zA-Z]{2}))");
        result = regex8.test(email_id);
        
        if(result){
            /**
             * If email Id validated, add email Id into the map
             */
            contact.set("email_id", email_id);
        }
        /**
         * else throw error
         */
        else throw "Regex validation for email Id failed. ";
    }catch(error){
        return console.log(error);
    }

    /**
     * Returns a map containing above details
     */
    return contact;
}