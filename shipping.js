function main(){
    //Create your constructor funtion with the name Shipment
    function Shipment(id,location,destination,status,resources){
        this.id = id;
        this.location = location;
        this.destination = destination;
        this.status = status;
        this.resources = resources;
    }
    //Add the updateStatusAndResources using the object prototype
    Shipment.prototype.updateStatusAndResources = function(statusPrm,resources){
        this.status = statusPrm;
        for(let i = 0;i< resources.length;i++){
            this.resources.push(resources[i]);
        }
        
    };
    Shipment.prototype.assignResources = function(...resourceParam){
        for(let i = 0;i< resourceParam.length;i++){
            this.resources.push(resourceParam[i]);
        }
       
    };


    //Add the assignResource methods through Object prototype
    
    //Create the object literal with tthe name TrackingSystem
    let TrackingSystem = {
        shipments: [],
        updateStatus : function updateStatus(Shpid,Shpstatus){
            for(let i = 0;i<this.shipments.length;i++){
                if(this.shipments[i].id === Shpid){
                    this.shipments[i].status = Shpstatus; 
                }
                return;
            }
        },

        viewShipment : function viewShipment(shipId){
            for(let i = 0;i<this.shipments.length;i++){
                if(this.shipments[i].id === shipId){
                   const {id,location,destination,status:shippingstatus,resources} = this.shipments[i];
                   console.log(`id ${id} location ${location} destination ${destination} ${shippingstatus} ${resources}`);
                }
            }
            return;
        }
    }
    const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");
    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
    shipment2.updateStatusAndResources("In transit", ["Driver"]);
    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");
    TrackingSystem.viewShipment("12345");

    return {Shipment,TrackingSystem};
    //do not modify any other code.
    
    
}


main();