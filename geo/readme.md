
### a Few Climate Oceanographic Spacial demos

- [ ] [oceanGeo](oceanGeo.html)  with some Geojson shapes


- [ ] [buoy](buoy.html)  including WMO + NOAA observation stations


- [ ] [esri](esri.html)  including GEBco bathysphere


##  Querying  OSCAR

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


Showing only the operation one, with yq query:

	programSpecificId: SPAIN-PDE MB:6100198
	dateEstablished: "2026-07-29T00:00:00.000+00:00"

	yq .stationSearchResults[].programSpecificId   



References:

- https://space.oscar.wmo.int/