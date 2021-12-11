const grpc = require('@grpc/grpc-js')
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  __dirname +'/../protos/teste.proto');
var testeProto = grpc.loadPackageDefinition(packageDefinition).TestStore;


const client = new testeProto.TestStore('localhost:50051',
    grpc.credentials.createInsecure())
    
    client.ReturnFoo(testeProto.TesteRequest, (error, notes) => {
        if (!error) {
            console.log(notes)
        } else {
            console.error(error)
        }
    })