
### a Few Climate Oceanographic Spacial demos

- [ ] [oceanGeo](oceanGeo.html)  with some Geojson shapes


- [ ] [buoy](buoy.html)  including WMO + NOAA observation stations


- [ ] [esri](esri.html)  including GEBco bathysphere


##  **global map of WMO observing stations**.


There is a REST API for WMO documents queries. 

Querying  OSCAR:

#### Observing Systems Capability Analysis and Review Tool  
 
OSCAR is a resource developed by WMO in support of Earth Observation applications, studies and global coordination.

Query WMO DB API , Example around Ceuta Gibraltar Strait:

https://oscar.wmo.int/surface/rest/api/search/station?facilityType=seaFixed&operatingStatus=operational&latitudeMin=35.075&latitudeMax=40.710&longitudeMin=-6.15&longitudeMax=-2.10&items=40 

The WMO replies with data, shown in yaml: the operational point

	totalCount: 8
	pageCount: 1
	pageNumber: 1
	itemsPerPage: 50
	stationSearchResults:
	  - id: 169528
	    name: "6100198_064"
	    territory: Spain
	...
	  - id: 169556
	    name: "6100198_065"
	    territory: Spain
	...
	- id: 175624
	  name: "6100198_072"
	  territory: Spain
	  declaredStatus: Operational
	  latitude: 36.569
	  longitude: -2.338
	  elevation: 0
	  stationTypeName: Sea (fixed)
	  wigosStationIdentifiers:
	    - wigosStationIdentifier: 0-22000-72-6100198
	      primary: true
	  wigosId: 0-22000-72-6100198
	  stationTypeId: 3
	  dateEstablished: "2026-07-29T00:00:00.000+00:00"
	  stationStatusCode: operational
	  stationTypeCode: landOceanSurface
	  stationProgramsDeclaredStatuses: SPAIN-PDE MB:Operational
	  stationDeclaredStatusCode: operational
	  assessedStatus: Unknown
	  stationAssessedStatusCode: unknown
	  stationProgramsAssessedStatuses: SPAIN-PDE MB:Unknown
	  programSpecificId: SPAIN-PDE MB:6100198
	  programApprovalStatus: SPAIN-PDE MB:Approved


Each station has a **WIGOS Station Identifier (WSI)**, plus location, station type, elevation, status, variables, etc. WSI is the identifier used to register observing stations/platforms in OSCAR/Surface.

Showing only the operation one, with yq query:

	programSpecificId: SPAIN-PDE MB:6100198
	dateEstablished: "2026-07-29T00:00:00.000+00:00"

	yq .stationSearchResults[].programSpecificId   



References:

- https://space.oscar.wmo.int/
- WIS 2.0 Global Discovery Catalogue — the treasure map [WMO WIS 2.0 Overview](https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/wmo-information-system-wis/wis2-overview?utm_source=chatgpt.com)

WIS2 has a **Global Discovery Catalogue (GDC)** that lets you discover datasets and determine how to access them. 

## Argos oceanographic mooring at  the Strait.

Espartel Sill  from the published observation record:

**35°51.71′ N, 5°58.22′ W**  
= **35.861833, -5.970333**

The mooring was equipped with a subsurface buoy and **two ARGOS beacons attached to the buoy**. carrying Argos telemetry,  

```
{
  "geometry": {
    "type": "point",
    "longitude": -5.970333,
    "latitude": 35.861833
  },
  "attributes": {
    "Name": "Espartel Sill Mooring",
    "Type": "Fixed oceanographic mooring",
    "Argos": true,
    "Location": "Strait of Gibraltar"
  }
}
```

References:

[Published Espartel Sill observation study](https://agupubs.onlinelibrary.wiley.com/doi/10.1002/2014JC010674?utm_source=chatgpt.com)

---

## WIS2 Global Discovery Catalogue 

Example # 4. A real WIS2 GeoJSON API: Chile 🇨🇱 

[MeteoChile WIS2 API](https://wischile.meteochile.gob.cl/oapi/collections?f=json   exposes a Stations collection and several observation collections, including:

- `synop-onehours`
- `synop-trihours`
- monthly/daily climate observations

The API advertises the observation collections directly as **GeoJSON**. ready for Leaflet GIS mapping

https://wischile.meteochile.gob.cl/oapi/collections/stations/items?f=json


The actual observations aren't necessarily sitting in the catalogue; the catalogue tells you **what exists and where/how to obtain it**.
