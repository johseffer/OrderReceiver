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
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerService _service;
        public CustomerController(ICustomerService service)
        {
            _service = service;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IQueryable<Customer>> Get()
        {
            return Ok(_service.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Customer> Get(Guid id)
        {
            return Ok(_service.GetAll().Where(x => x.Id == id));
        }        
    }
}
