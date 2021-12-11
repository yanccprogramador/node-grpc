const grpc = require('@grpc/grpc-js')
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  __dirname +'/protos/teste.proto');
var testeProto = grpc.loadPackageDefinition(packageDefinition).TestStore;
console.log(testeProto);

const notes =
    {  foo: 'bar'};
const server = new grpc.Server();

server.addService(testeProto.TestStore.service, {
  ReturnFoo: (_, callback) => {
        callback(null, notes)
    },
})
server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
})
console.log('Server running at http://127.0.0.1:50051')