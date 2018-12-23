using AutoMapper;
using RequestReceiver.Domain.DTO.Order;
using RequestReceiver.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RequestReceiver.Server
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Order, OrderGetDTO>();
        }
    }
}

