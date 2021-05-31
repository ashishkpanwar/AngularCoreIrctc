using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    public class Station
    {
        public int id { get; set; }

       
        public string StationName { get; set; }
    }
    public class MyJourney
    {
        public string fromstation { get; set; }
        public string tostation { get; set; }
    }
}
