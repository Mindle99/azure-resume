window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = "https://getresumecounterversionone.azurewebsites.net/api/GetResumeCounter?code=FZtODFAYpboyhb-kXx6D6znWBx4wcidtbytoZyzIPC5NAzFu-Rd_kg=="
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}