import * as util from '../util';

describe('getDistanceFromLatLonInKm tests', () => {
    describe('unit tests for deg2rad', () => {
        it('call deg2rad for 0 degrees', () => {
            //const piMock = jest.spyOn(Math.PI);
            expect(util.deg2rad(0)).toEqual(0);
        });
        
        it('call deg2rad for 90 degrees', () => {
            //const piMock = jest.spyOn(Math.PI);
            expect(util.deg2rad(90)).toEqual(1.5707963267948966);
        });
        it('call deg2rad for 180 degrees', () => {
            //const piMock = jest.spyOn(Math.PI);
            expect(util.deg2rad(180)).toEqual(3.141592653589793);
        });
        it('call deg2rad for 270 degrees', () => {
            //const piMock = jest.spyOn(Math.PI);
            expect(util.deg2rad(270)).toEqual(4.71238898038469);
        });
    });
    // describe('unit tests for getDistanceFromLatLonInKm', () => {
    //     const lat1 = 40.872352;
    //     const long1 = -73.825932;
    //     const lat2 = 30.820283;
    //     const long2 = -73.949439;
    //     const deg2radMockLat = jest.spyOn(util.deg2rad);
    //     deg2radMockLat.mockImplementation(() => -0.17544170068765388);
    //     const deg2radMockLong = jest.spyOn(util.deg2rad);
    //     deg2radMockLong.mockImplementation(() => -0.002155603799260699)
    //     expect(deg2radMockLat(lat2 - lat1)).toEqual(-0.17544170068765388);
    //     expect(deg2radMockLong(long2 - long1)).toEqual(-0.002155603799260699);
    // })
});