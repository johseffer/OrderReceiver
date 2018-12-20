using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces.Service;

namespace RequestReceiver.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;
        public OrderController(IOrderService service)
        {
            _service = service;
        }

        // GET api/Order
        [HttpGet]
        public IEnumerable<Order> Get()
        {
            return _service.GetAll();
        }

        // GET api/Order/5
        [HttpGet("{id}")]
        public ActionResult<Order> Get(string id)
        {
            var result = _service.GetAll().Where(x => x.Number.Contains(id)).ToList();
            return Ok(result);
        }
        
        [HttpGet("GetDetail/{id}")]
        public ActionResult<Order> GetDetail(string id)
        {
            var result = _service.GetAll().Where(x => x.Number.Contains(id)).FirstOrDefault();
            return Ok(result);
        }

        // POST api/Order
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/Order/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/Order/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
