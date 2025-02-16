import { useState, useEffect } from "react";
import { provincesData } from "../../data/provincesData";
import { allMarkers } from "../../data/allMarkers";

export function useFilterCartsMarkers() {
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [districtsForProvince, setDistrictsForProvince] = useState([]);
    const [filtersApplied, setFiltersApplied] = useState(false);
    const [filteredMarkers, setFilteredMarkers] = useState(allMarkers);

    useEffect(() => {
        const selectedProvinceData = provincesData.find((province) => province.name === selectedProvince);
        setDistrictsForProvince(selectedProvinceData ? selectedProvinceData.districts : []);
        setSelectedDistrict("");
    }, [selectedProvince]);

    const handleApplyFilter = () => {
        setFiltersApplied(true);
        const filteredMarkers = yourFilteringLogic(selectedProvince, selectedDistrict);
        setFilteredMarkers(filteredMarkers);
    };

    const handleResetFilters = () => {
        setSelectedProvince("");
        setSelectedDistrict("");
        setDistrictsForProvince([]);
        setFiltersApplied(false);
        setFilteredMarkers(allMarkers);
    };

    const yourFilteringLogic = (province, district) => {
        return allMarkers.filter((marker) => {
            const title = marker.title.toLowerCase();
            const markerProvince = marker.province.toLowerCase();
            const markerDistrict = marker.district.toLowerCase();
            const provinceMatch = province === "" || title.includes(province.toLowerCase()) || markerProvince.includes(province.toLowerCase());
            const districtMatch = district === "" || markerDistrict.includes(district.toLowerCase());
            return provinceMatch && districtMatch;
        });
    };

    return {
        selectedProvince,
        setSelectedProvince,
        selectedDistrict,
        setSelectedDistrict,
        districtsForProvince,
        filtersApplied,
        filteredMarkers,
        handleApplyFilter,
        handleResetFilters
    };
}
