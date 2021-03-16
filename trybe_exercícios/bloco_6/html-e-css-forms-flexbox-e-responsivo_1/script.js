const listaDeEstados = [{name: 'Acre', sigla: 'AC'}, {name: 'Alagoas', sigla: 'AL'}, {name: 'Amapá', sigla: 'AP'}, {name: 'Amazonas', sigla: 'AM'}, {name: 'Bahia', sigla: 'BA'}, {name: 'Ceará', sigla: 'CE'}, {name: 'Distrito Federal', sigla: 'DF'}, {name: 'Espírito Santo', sigla: 'ES'}, {name: 'Goiás', sigla: 'GO'}, {name: 'Maranhão', sigla: 'MA'}, {name: 'Mato Grosso', sigla: 'MT'}, {name: 'Mato Grosso do Sul', sigla: 'MS'}, {name: 'Minas Gerais', sigla: 'MG'}, {name: 'Pará', sigla: 'PA'}, {name: 'Paraíba', sigla: 'PB'}, {name: 'Paraná', sigla: 'PR'}, {name: 'Pernambuco', sigla: 'PE'}, {name: 'Piauí', sigla: 'PI'}, {name: 'Rio de Janeiro', sigla: 'RJ'}, {name: 'Rio Grande do Norte', sigla: 'RN'}, {name: 'Rio Grande do Sul', sigla: 'RS'}, {name: 'Rondônia', sigla: 'RO'}, {name: 'Santa Catarina', sigla: 'SC'}, {name: 'São Paulo', sigla: 'SP'}, {name: 'Sergipe', sigla: 'SE'}, {name: 'Tocantins', sigla: 'TO'}];

function adicionaEstados() {
    const inputEstados = document.querySelector('#input-estados');
    for (let index = 0; index < listaDeEstados.length; index += 1) {
        let estados = document.createElement('option');
        estados.innerHTML = listaDeEstados[index].name;
        estados.value = listaDeEstados[index].sigla;
        inputEstados.appendChild(estados);
    }
}
adicionaEstados();

//<input type="text" value="dia / mes / ano" size="10%" name="data" id="input-data">

let dataInicioEmprego = document.querySelector('.input-data');
                    //dia, mes, ano   
let valueDataInput = ['', '', ''];

/*function dataDeInicio() {
    for(let index = 0; index < valueDataInput.length; index += 1) {
        if (valueDataInput[0] > 0 && valueDataInput[0] <= 31 ) {
            dataInicioEmprego.value.join('/') = valueDataInput[0] + valueDataInput[1] +valueDataInput[2];
        }
        if (valueDataInput[1] > 0 && valueDataInput <= 12) {
            dataInicioEmprego[1].value.join('/') = valueDataInput[0] + valueDataInput[1] +valueDataInput[2];
        }
        if (valueDataInput[2] > 0) {
            dataInicioEmprego[2].value.join('/') = valueDataInput[0] + valueDataInput[1] +valueDataInput[2];
        } else {
            alert('Data Invalida !');
        }
    }
    
    
}

dataDeInicio();*/
function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day < 31) && (month > 0 && month <= 12) && (year > 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
} 
