/**
 * Province state
 *
 * @export
 * @interface ProvinceState
 */
export interface ProvinceState {
    divisions: Divisions[] | any;
}

export interface Divisions {
    provinceCode: string;
    provinceName: string;
    cityCode: string;
    cityName: string;
    areaCode: string;
    areaName: string;
    streetCode: string;
    streetName: string;
    villageCode: string;
    villageName: string;
}
