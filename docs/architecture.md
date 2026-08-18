# SVES architecture

SVES is a browser application organized around a dashboard shell, structured alumni data, filtering logic, and data visualizations. The application avoids server-side complexity for the current scope and keeps the data transformation flow transparent.

## Data flow

The application reads alumni records from the public data set. User selections affect the derived record collection, which feeds summary metrics, charts, and the directory. This approach keeps behavior deterministic and makes later data-source replacement straightforward.
