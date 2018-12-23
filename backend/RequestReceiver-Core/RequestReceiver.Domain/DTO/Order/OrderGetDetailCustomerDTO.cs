using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RequestReceiver.Domain.DTO.Order
{
    public class OrderGetDetailCustomerDTO : EntityBase
    {
        public string Name { get; set; }
    }
}
