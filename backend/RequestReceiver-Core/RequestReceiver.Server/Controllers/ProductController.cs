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
    public class ProductController : ControllerBase
    {
        private readonly IProductService _service;
        public ProductController(IProductService service)
        {
            _service = service;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IQueryable<Product>> Get()
        {
            return Ok(_service.GetAll());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<Product> Get(Guid id)
        {
            return Ok(_service.GetAll().Where(x => x.Id == id));
        }        
    }
}
