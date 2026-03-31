---
layout: watermarked
title: Environment Meteo Oceans
author: cj/zrydys 
---

## Oceanography, Meteo, Environment data

Zrydys.github.io interests includes data innovation and telecommunications in oceanographic, meteorological, and environmental areas. 

Regarding buoys, drifters, weather stations, and ships, observational data (such as temperature, pressure, wind, sea ice, etc.) is transmitted from remote platforms to data centers or operational users using these formats:

 
### **1. E-Surfmar / DBCP (Data Buoy Cooperation Panel)**

- **E-Surfmar** is a French organization involved in the development and maintenance of surface drifting buoys (SVP-B) and other oceanographic platforms.
- **DBCP** is an international program coordinating the deployment and data collection from drifting buoys.
- **Common formats:**
    - **Binary data formats for SVP-B buoys** (including sea ice and internal technical parameter versions)
    - **Binary data format for SIO SVP-B drifters**
    - **Binary data format for AWS (Automated Weather Stations)**
    - **Half compressed format for Turbowin**
 
### **2. WMO BUFR (Binary Universal Form for the Representation of meteorological data)**

- **BUFR** is a binary data format standard developed by the **World Meteorological Organization (WMO)** for efficient transmission of meteorological and oceanographic data.
- **Common applications:**
    - **VOS BUFR** (Voluntary Observing Ship)
    - **SOOP BUFR** (Ship Of Opportunity Program)
    - **ASAP BUFR** (Automated Shipboard Aerological Programme)
    - **BUFR Trackob (TSG)** – Thermosalinograph data
    - **BUFR offshore platforms**
    - **BUFR basic ship AWS**
    - **BUFR TEMP SHIP** – Upper-air temperature profiles from ships
    - **BUFR BATHY / XBT** – Bathymetric or eXpendable BathyThermograph data
    - **BUFR TESAC (CTD)** – Conductivity, Temperature, Depth data
 
### **3. ASCII Formats**

- **ASCII** (text-based) formats are used for human-readable data transmission and archiving.
- **Common applications:**
    - **ASCII SOOP format** (Ship Of Opportunity Program)
    - **ASAP ASCII format**
    - **ASCII SHIP format**
    - **ASCII data format used for AMOS stations** (Automated Meteorological Observing System)
    - **CSV** (Comma-Separated Values) – widely used for tabular data exchange

### **4. Other Systems and Formats**

- **Météo-France AWS**: Automated Weather Stations operated by Météo-France, likely using custom or WMO-standard formats.
- **SEAS**: Likely refers to a specific system or platform, possibly using a custom binary format.
- **"Other binary/ASCII format"**: Custom or proprietary formats used by specific organizations or platforms.
 
###  Common Systems and Their Formats**

Common Systems and Their Data Formats

|System/Organization|Common Data Formats|
|---|---|
|E-Surfmar / DBCP|Binary (SVP-B, SIO SVP-B, AWS, Turbowin)|
|WMO (BUFR)|VOS BUFR, SOOP BUFR, ASAP BUFR, BUFR Trackob, BUFR offshore, BUFR TEMP SHIP, etc.|
|Ship-based programs|ASCII SOOP, ASCII SHIP, VOS BUFR, SOOP BUFR|
|Météo-France|Custom AWS format, possibly BUFR or ASCII|
|General/Other|CSV, Other binary/ASCII, Unknown|

 Regarding locations: considering 
 
 - **GPS** for location only, accuracy ~1–5m, separated from  communication.
- **Iridium Const / ORBCOMM LEO** real-time, two-way data globally.
- **Argos** Doppler, low-power, less precise 150m-1km, reliable remote tracking.
- RAFOS floats are neutrally buoyant and drift with ocean currents at depth. Positions triangulated by listening to underwater sound sources (beacons).


Regarding formats:

- **Efficiency**: Binary formats (like BUFR) are compact and efficient for transmission over limited-bandwidth links (e.g., satellite).
- **Standardization**: WMO BUFR ensures interoperability between different countries and platforms.
- **Legacy/Compatibility**: ASCII formats are human-readable and widely supported, but less efficient.




---
 
- In addition to oceanographic, meteorological, and environmental data transmission , Zrydys.github.io´s interests include also  [AIS Navigation](ais.html). 

- [zrydys.github.io/s/sea](/s/sea)

-   tech references gradually added below: #api #marpol #env #meteo

Refs: comprehensive list:  API at www.ocean-ops.org/api/1/data/telecomformat or table at https://www.ocean-ops.org/api/help/?param=telecomformat
