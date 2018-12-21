using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RequestReceiver.Domain.DTO.Order
{
    public class OrderGetProductDTO : EntityBase
    {
        public string Name { get; set; }
        public decimal UnitPrice { get; set; }
        public int Multiple { get; set; }
    }
}
