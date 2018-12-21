using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RequestReceiver.Domain.DTO.Order;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces.Service;

namespace RequestReceiver.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;
        private readonly IMapper _mapper;
        public OrderController(IOrderService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        // GET api/Order
        [HttpGet]
        public List<OrderGetDTO> Get()
        {
            return _service.GetAll();
        }

        // GET api/Order/5
        [HttpGet("{id}")]
        public ActionResult<OrderGetDTO> Get(string id)
        {
            return Ok(_service.GetAll().Where(x => x.Number.Contains(id)).ToList());
        }

        [HttpGet("GetDetail/{id}")]
        public ActionResult<OrderGetDTO> GetDetail(string id)
        {
            return Ok(_service.GetById(new Guid(id)));
        }

        // POST api/Order
        [HttpPost]
        public ActionResult Post([FromBody] Order model)
        {
            _service.Add(model);
            return Ok();
        }

        // PUT api/Order/5
        [HttpPut("{id}")]
        public ActionResult Put(Guid id, [FromBody] Order model)
        {
            _service.Update(model);
            return Ok();
        }

        // DELETE api/Order/5
        [HttpDelete("{id}")]
        public ActionResult Delete(Guid id)
        {
            _service.Remove(id);
            return Ok();
        }
    }
}
