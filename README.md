# OneDao Stats

Retrieve [OneDao ODAO/OXY](https://onedao.finance/) stats via command line or simple web service.

Code for the OneDao dashboard does not seem to be on GitHub. This is based on code from the [Wonderland-Money frontend github repo](https://github.com/Wonderland-Money/wonderland-frontend/commit/19a9eecd8d9794b058cbfac90967c338717889b2), with a few changes reverse engineered from the OneDao dashboard minified code. (See also https://github.com/kevineye/wonderland-stats)

## CLI

    $ docker run --rm kevineye/onedao-stats
    {
      "currentIndex": 4.641734712666667,
      "totalSupply": 7324.598136988,
      "marketCap": 45197212.97620782,
      "currentBlock": 20115042,
      "circSupply": 5747.949776371,
      "fiveDayRate": 0.25638869070194814,
      "stakingAPY": 17220800.01088189,
      "stakingTVL": 35468336.33196658,
      "stakingRebase": 0.003811269273621089,
      "marketPrice": 6170.606513955958,
      "currentBlockTime": 1638713511,
      "nextRebase": 1638714600
    }
    
## Server

    $ docker run -d -p 3000:3000 kevineye/onedao-stats --server
    $ curl http://localhost:3000/onedao-stats
    {
      "currentIndex": 4.641734712666667,
      "totalSupply": 7324.598136988,
      "marketCap": 45197212.97620782,
      "currentBlock": 20115042,
      "circSupply": 5747.949776371,
      "fiveDayRate": 0.25638869070194814,
      "stakingAPY": 17220800.01088189,
      "stakingTVL": 35468336.33196658,
      "stakingRebase": 0.003811269273621089,
      "marketPrice": 6170.606513955958,
      "currentBlockTime": 1638713511,
      "nextRebase": 1638714600
    }
