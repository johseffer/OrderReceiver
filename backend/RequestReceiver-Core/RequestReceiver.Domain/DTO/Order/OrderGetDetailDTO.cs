using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace RequestReceiver.Domain.DTO.Order
{
    public class OrderGetDetailDTO : EntityBase
    {
        public virtual IList<OrderGetDetailItemDTO> OrderItems { get; set; }

        public string Number { get; set; }

        public DateTime? CreationDate { get; set; }
    }
}
