import { filterCountries } from "../filterCountries";

const countries = [
  {
    id: 2000,
    name: "Afghanistan",
    countryCode: "AFG",
    ensignUrl: null,
    parentAreaId: 2014,
    parentArea: "Asia",
  },
  {
    id: 2001,
    name: "Africa",
    countryCode: "AFR",
    ensignUrl: null,
    parentAreaId: 2267,
    parentArea: "World",
  },
  {
    id: 2002,
    name: "Albania",
    countryCode: "ALB",
    ensignUrl: null,
    parentAreaId: 2077,
    parentArea: "Europe",
  },
  {
    id: 2003,
    name: "Alderney",
    countryCode: "ALD",
    ensignUrl: null,
    parentAreaId: 2077,
    parentArea: "Europe",
  },
  {
    id: 2004,
    name: "Algeria",
    countryCode: "ALG",
    ensignUrl: null,
    parentAreaId: 2001,
    parentArea: "Africa",
  },
  {
    id: 2005,
    name: "American Samoa",
    countryCode: "ASM",
    ensignUrl: null,
    parentAreaId: 2175,
    parentArea: "Oceania",
  },
  {
    id: 2006,
    name: "Andorra",
    countryCode: "AND",
    ensignUrl: null,
    parentAreaId: 2077,
    parentArea: "Europe",
  },
  {
    id: 2007,
    name: "Angola",
    countryCode: "ANG",
    ensignUrl: null,
    parentAreaId: 2001,
    parentArea: "Africa",
  },
  {
    id: 2008,
    name: "Anguilla",
    countryCode: "AIA",
    ensignUrl: null,
    parentAreaId: 2159,
    parentArea: "N/C America",
  },
  {
    id: 2009,
    name: "Antigua and Barbuda",
    countryCode: "ATG",
    ensignUrl: null,
    parentAreaId: 2159,
    parentArea: "N/C America",
  },
  {
    id: 2010,
    name: "Arameans Suryoye",
    countryCode: "ARS",
    ensignUrl: null,
    parentAreaId: 2267,
    parentArea: "World",
  },
  {
    id: 2011,
    name: "Argentina",
    countryCode: "ARG",
    ensignUrl: null,
    parentAreaId: 2220,
    parentArea: "South America",
  },
  {
    id: 2012,
    name: "Armenia",
    countryCode: "ARM",
    ensignUrl: null,
    parentAreaId: 2077,
    parentArea: "Europe",
  },
];

const competitions = [
  {
    id: 2006,
    area: {
      id: 2001,
      name: "Africa",
      countryCode: "AFR",
      ensignUrl: null,
    },
    name: "WC Qualification",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 555,
      startDate: "2019-09-04",
      endDate: "2021-11-16",
      currentMatchday: null,
      winner: null,
    },
    numberOfAvailableSeasons: 2,
    lastUpdated: "2018-06-04T23:54:04Z",
  },
  {
    id: 2023,
    area: {
      id: 2011,
      name: "Argentina",
      countryCode: "ARG",
      ensignUrl: null,
    },
    name: "Primera B Nacional",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 547,
      startDate: "2019-08-16",
      endDate: "2020-06-14",
      currentMatchday: 30,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-05-15T00:00:02Z",
  },
  {
    id: 2024,
    area: {
      id: 2011,
      name: "Argentina",
      countryCode: "ARG",
      ensignUrl: null,
    },
    name: "Superliga Argentina",
    code: "ASL",
    emblemUrl: null,
    plan: "TIER_TWO",
    currentSeason: {
      id: 539,
      startDate: "2019-07-27",
      endDate: "2020-03-01",
      currentMatchday: 22,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-03-10T12:10:19Z",
  },
  {
    id: 2025,
    area: {
      id: 2011,
      name: "Argentina",
      countryCode: "ARG",
      ensignUrl: null,
    },
    name: "Supercopa Argentina",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 430,
      startDate: "2019-04-04",
      endDate: "2019-04-04",
      currentMatchday: null,
      winner: null,
    },
    numberOfAvailableSeasons: 2,
    lastUpdated: "2019-05-03T05:08:18Z",
  },
  {
    id: 2147,
    area: {
      id: 2014,
      name: "Asia",
      countryCode: "ASI",
      ensignUrl: null,
    },
    name: "WC Qualification",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 465,
      startDate: "2019-06-06",
      endDate: "2021-11-16",
      currentMatchday: 9,
      winner: null,
    },
    numberOfAvailableSeasons: 2,
    lastUpdated: "2020-03-30T00:00:02Z",
  },
  {
    id: 2026,
    area: {
      id: 2015,
      name: "Australia",
      countryCode: "AUS",
      ensignUrl: null,
    },
    name: "FFA Cup",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 592,
      startDate: "2020-02-19",
      endDate: "2020-10-28",
      currentMatchday: null,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2019-10-23T23:59:22Z",
  },
  {
    id: 2008,
    area: {
      id: 2015,
      name: "Australia",
      countryCode: "AUS",
      ensignUrl: null,
    },
    name: "A League",
    code: "AAL",
    emblemUrl: null,
    plan: "TIER_TWO",
    currentSeason: {
      id: 548,
      startDate: "2019-10-11",
      endDate: "2020-05-17",
      currentMatchday: 29,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-04-25T00:00:01Z",
  },
  {
    id: 2012,
    area: {
      id: 2016,
      name: "Austria",
      countryCode: "AUT",
      ensignUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    },
    name: "Bundesliga",
    code: "ABL",
    emblemUrl: null,
    plan: "TIER_THREE",
    currentSeason: {
      id: 470,
      startDate: "2019-07-22",
      endDate: "2020-05-26",
      currentMatchday: 1,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-05-09T00:00:01Z",
  },
  {
    id: 2022,
    area: {
      id: 2016,
      name: "Austria",
      countryCode: "AUT",
      ensignUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    },
    name: "Playoffs 1/2",
    code: "APL",
    emblemUrl: null,
    plan: "TIER_TWO",
    currentSeason: {
      id: 24,
      startDate: "2018-05-31",
      endDate: "2018-06-03",
      currentMatchday: null,
      winner: {
        id: 2022,
        name: "SKN Sankt Pölten",
        shortName: "St. Pölten",
        tla: "STP",
        crestUrl: null,
      },
    },
    numberOfAvailableSeasons: 1,
    lastUpdated: "2018-08-23T15:47:33Z",
  },
  {
    id: 2027,
    area: {
      id: 2016,
      name: "Austria",
      countryCode: "AUT",
      ensignUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    },
    name: "ÖFB Cup",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 491,
      startDate: "2019-07-14",
      endDate: "2020-05-01",
      currentMatchday: null,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-04-30T00:00:01Z",
  },
  {
    id: 2020,
    area: {
      id: 2016,
      name: "Austria",
      countryCode: "AUT",
      ensignUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    },
    name: "Erste Liga",
    code: null,
    emblemUrl: null,
    plan: "TIER_FOUR",
    currentSeason: {
      id: 471,
      startDate: "2019-07-21",
      endDate: "2020-05-29",
      currentMatchday: 28,
      winner: null,
    },
    numberOfAvailableSeasons: 3,
    lastUpdated: "2020-05-14T00:00:01Z",
  },
];

const expectedOutput = [
  {
    id: 2001,
    name: "Africa",
    countryCode: "AFR",
    ensignUrl: null,
    parentAreaId: 2267,
    parentArea: "World",
  },
  {
    id: 2011,
    name: "Argentina",
    countryCode: "ARG",
    ensignUrl: null,
    parentAreaId: 2220,
    parentArea: "South America",
  },
];

test("filterCountries", () => {
  expect(filterCountries(countries, competitions)).toEqual(expectedOutput);
});
