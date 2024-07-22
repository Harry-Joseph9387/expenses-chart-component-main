import {Bar} from "react-chartjs-2"
import {CategoryScale,LinearScale,Chart as ChartJS,BarElement,Tooltip,Title} from "chart.js"
import Image from "./images/logo.svg"

ChartJS.register(CategoryScale,LinearScale,BarElement,Tooltip,Title)
function App() {
  const state={
    labels:['mon','tue','wed','thur','fri','sat','sun'],
    datasets:[{
      label:"Spending Last 7 days",
      backgroundColor:"hsl(10, 79%, 65%)",
      borderRadius:10,
      hoverBackgroundColor:" hsl(186, 34%, 60%)",
      data:[17.45,34.91,52.36,31.07,23.39,43.28,25.48]
    }]
  }
  return (
    <div className='max-w-xl mx-auto p-5 flex flex-col h-screen justify-center'>
      <article className="flex justify-between price p-6 text-white">
        <div>
          <p className="opacity-75">My balance</p>
          <h2 className="text-3xl font-bold ">$921.48</h2>
        </div>
        <img src={Image}/>
      </article>
      <article className="p-8 graph mt-8">
        <h1 className="text-4xl font-bold mb-2">Spending-Last 7 days</h1>
        <Bar className="mb-5" data={state}/>
        <article className="border-t border-slate-200">
            <p className="opacity-50 mt-8">Total this month</p>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold ">$478.33</h1>
            <div className="flex flex-col items-end">
              <h1 className="font-bold text-base">+2.4%</h1>
              <p className="font-normal opacity-50">from last month</p>
           </div>
          </div>
        </article>
      </article>
      
    </div>
  );
}

export default App;
