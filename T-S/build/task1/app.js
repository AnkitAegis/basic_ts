var stats;
(function (stats) {
    stats["Active"] = "Active";
    stats["Inactive"] = "Inactive";
    stats["New"] = "New";
})(stats || (stats = {}));
let user = {
    id: 1,
    email: "abc",
    status: 'Active'
};
// function clone(source:Contact, func:(source:Contact)=>Contact){
//     return "string";
// }
