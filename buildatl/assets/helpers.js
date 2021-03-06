
import Cytosis from 'cytosis'
// import NewCytosis from '~/assets/newcytosis.js'


const api = 'keyAe6M1KoPfg25aO';
const base = 'app8apL6FHHvS8dl4';

export const fetchCytosis = async function(store=undefined) {

  let cytosis = new Cytosis({
    airtableApiKey: api,
    airtableBase: {id: base}
  })

  if(store && !store.state.cytosis) {
    let result
    await cytosis.initConfig()
    let tables = await cytosis.getTables({view: "Grid view"})
    // console.log('tables:', tables)
    // result = await cytosis.find("Test Content", tables)
    // console.log('Result 1:', result)
    // let _test = shallowClone(cytosis)
    let obj = { cytosis: cytosis, ...tables }

    store.commit('updateCreate', obj)
  }
  return new Promise(function(resolve, reject) {
    resolve(cytosis)
  })
}

// nonasync constructor
export const getCytosis = function() {
  return new Cytosis({
    airtableApiKey: api,
    airtableBase: {id: base}
  })
}

