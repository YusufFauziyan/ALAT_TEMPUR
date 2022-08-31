// Manipulation Key and Value array of Object
const example = data.map((item) => ({
  name: `Your project: ${item.name}, was ${item.status}`,
  description: `Updated By: ${item.updatedBy.email}`,
  statusMessage: "UNREAD",
}));

// Input Key and Value in Select Options
// link here : https://codesandbox.io/s/angry-gould-kjdt9x?file=/src/App.js:0-770
export default function App() {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setData({
      [e.target.value.split(",")[0]]: e.target.value.split(",")[1],
    });
  };

  console.log(data);

  return (
    <div className="App">
      <select onChange={handleChange}>
        <option hidden>Pilih Kota</option>
        {dataKota.map((item, index) => (
          <option key={index} value={[item.name, item.id]}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

// Sum from value array of Object
data
  .map((item) => item.memory)
  .map(Number)
  .reduce((a, b) => a + b, 0);

//  make random string and number
let rand_number = Math.floor(Math.random() * 1000);
let rand_time = new Date().getTime();
let rand_string = `vm-${rand_number}-${rand_time}`;

// delay function like setTimeout, but this function u can put everywhere like component
function sleep(num) {
  let now = new Date();
  let stop = now.getTime() + num;
  while (true) {
    now = new Date();
    if (now.getTime() > stop) return;
  }
}

// manipulation Array of Object where already map into table
getZonesDatas[index].idImage = e.target.value.split(",")[0];
getZonesDatas[index].os = e.target.value.split(",")[1];
setGetZonesDatas([...getZonesDatas]);

// Example Recursif function
var updateIp = 0;
const updatedIp = async () => {
  try {
    const data = await axios.get(
      `${process.env.VERIFICATION}/vmware-updated-ip?query=${vmId}?query=${value?.project?.hypervisor?.id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (data.data.statusCode == 200 || updateIp > 30) {
      console.log("true");
      await axios.get(
        `${process.env.VERIFICATION}/vmware-updated-ip?query=${vmId}?query=${value?.project?.hypervisor?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(
        setLoadingPower({
          data: "",
        })
      );
      refetchVm();
    } else {
      console.log("false " + updateIp);
      updateIp++,
        setTimeout(() => {
          updatedIp();
        }, 5000);
    }
  } catch (error) {
    console.log(error);
    dispatch(
      setLoadingPower({
        data: "",
      })
    );
  }
};
