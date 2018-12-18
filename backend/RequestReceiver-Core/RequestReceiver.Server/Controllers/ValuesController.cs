using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using RequestReceiver.Domain.DTO.Order;
using RequestReceiver.Domain.Entities;
using RequestReceiver.Domain.Interfaces.Service;

namespace RequestReceiver.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly ICustomerService _service;
        private readonly IProductService _productService;
        private readonly IOrderService _orderService;
        public ValuesController(ICustomerService service, IOrderService orderService, IProductService productService, IMapper mapper)
        {
            _service = service;
            _orderService = orderService;
            _productService = productService;
            _mapper = mapper;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IQueryable<Customer>> Get()
        {
            //var order = new Order() { OrderItems = new List<OrderItem>() { new OrderItem() { ProductId = _productService.GetAll().First().Id } } };
            //_orderService.Add(order);
            return Ok(_orderService.GetAll().Select(c => _mapper.Map<OrderGetDTO>(c)));
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
