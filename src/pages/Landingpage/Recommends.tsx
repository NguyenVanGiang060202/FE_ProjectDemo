import BussinessRcm from "./components/BussinessRcm"
import IndividualsRcm from "./components/IndividualsRcm"



export default function Recommends() {
  return (
    <div className="w-dvw h-full  px-40 flex justify-start items-start flex-col">
      <h2 className="text-5xl font-bold">Luminova recommends</h2>
      <BussinessRcm />
      <IndividualsRcm />
    </div>
  )
}
