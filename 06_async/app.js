///////////////////// Event Loop

// function delay(callback, time = 1000) {
//   setTimeout(callback, time)
// }

// delay(() => {
//   console.log('timeout');
// }, 2000)

/////////////////////////////////////////////////
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
  return promise
}

delay(2500)
  .then((data) => {
    console.log('Timeout', data);
    return data.map((x) => x ** 2)
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('Finally');
  })

//////////////////////////////

const getData = () => new Promise((resolve) => resolve([1, 2, 3]))
getData().then((array) => console.log(array))

//////////////////////////////

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log(data);
  } catch (error) {
    console.log(err);
  } finally {
    console.log('Finally');
  }
}

asyncExample()