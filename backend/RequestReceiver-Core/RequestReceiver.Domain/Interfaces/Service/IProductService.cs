using RequestReceiver.Definitions.IoC;
using RequestReceiver.Domain.DTO.Order;
using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace RequestReceiver.Domain.Interfaces.Service
{
    public interface IProductService : IAutoInject, IDisposable
    {
        List<ProductGetDTO> GetProductByNameWith(string name);
    }
}
