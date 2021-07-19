      /**
       * @function 通过传入两个经纬度，计算出实际距离（单位：m）
       * @param {number} lat1  纬度1
       * @param {number} lng1  经度1
       * @param {number} lat2  纬度2
       * @param {number} lng2  经度2
       * @return {number}
       *
       * @author xiaozai 2021.07.19
       *
       */
       function getDistance(lat1, lng1, lat2, lng2){
        // 地球平均半径
        const EARTH_RADIUS = 6378137;
        // 把经纬度转为度（°）
        // 纬度
        let degree_lat1 = (lat1 * Math.PI) / 180.0;
        let degree_lat2 = (lat2 * Math.PI) / 180.0;
        let a = degree_lat1 - degree_lat2;
        // 经度
        let degree_lng1 = (lng1 * Math.PI) / 180.0;
        let degree_lng2 = (lng2 * Math.PI) / 180.0;
        let b = degree_lng1 - degree_lng2;
        // 距离 （单位：米）
        let s =
          2 *
          Math.asin(
            Math.sqrt(
              Math.pow(Math.sin(a / 2), 2) +
                Math.cos(degree_lat1) *
                  Math.cos(degree_lat2) *
                  Math.pow(Math.sin(b / 2), 2)
            )
          );
        s = s * EARTH_RADIUS;
        s = Math.round(s * 10000) / 10000;
        return s;
      }