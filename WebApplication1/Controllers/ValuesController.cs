using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            var webClient = new WebClient();
            //var stationList = new List<Station>();
            var jsonObj = webClient.DownloadString(@"C:\Users\apanwar\Documents\IRCTC\WebApplication1\Data\FromStation.json");
            var Stations = JsonConvert.DeserializeObject<List<Station>>(jsonObj);
            return Json(Stations);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values/5/6
        [HttpPost]
        public JsonResult Post([FromBody] MyJourney model)
        {
            var webClient = new WebClient();
            var availableTrain = new List<Train>();
            //var stationList = new List<Station>();
            var jsonObj = webClient.DownloadString(@"C:\Users\apanwar\Documents\IRCTC\WebApplication1\Data\Routes.json");
            var Route = JsonConvert.DeserializeObject<List<Routes>>(jsonObj);
            var trainObj = webClient.DownloadString(@"C:\Users\apanwar\Documents\IRCTC\WebApplication1\Data\trains.json");
            var trains = JsonConvert.DeserializeObject<List<Train>>(trainObj);
            foreach (Routes val in Route)
            {
                if(val.Station.Contains(model.fromstation) && val.Station.Contains(model.tostation))
                {
                    foreach(Train train in trains)
                    {
                        if (train.routeid == val.routeid)
                        {
                            availableTrain.Add(train);
                        }
                    }
                }
            }
            return Json(availableTrain);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
