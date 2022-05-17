import { AdminBody } from "../components/admin-body";
import { ReactSelector } from "../components/inputs/react-selector";
import { GlobalSearch } from "../components/search";
import { SeriesDetailsCard } from "../components/series-details.card";

const AddAudioSeries = () => {
  return (
    <AdminBody>
      <div className="flex justify-center items-center my-4">
        <div className="w-3/5 flex">
          <GlobalSearch></GlobalSearch>
        </div>
        <ReactSelector></ReactSelector>
        <div className="bg-purple-600 ml-2 rounded p-2 h-14 px-6 flex justify-center items-center text-white">
          Apply
        </div>
      </div>
      <div className="w-full p-8 bg-gray-200 rounded flex flex-wrap">
        <SeriesDetailsCard></SeriesDetailsCard>
        <SeriesDetailsCard></SeriesDetailsCard>
        <SeriesDetailsCard></SeriesDetailsCard>
        <SeriesDetailsCard></SeriesDetailsCard>
        <SeriesDetailsCard></SeriesDetailsCard>

        <SeriesDetailsCard></SeriesDetailsCard>

        <SeriesDetailsCard></SeriesDetailsCard>
      </div>
    </AdminBody>
  );
};

export default AddAudioSeries;
