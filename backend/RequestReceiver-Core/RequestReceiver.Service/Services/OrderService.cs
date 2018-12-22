using RequestReceiver.Domain.Interfaces.Service;
using RequestReceiver.Domain.Interfaces.Repository;
using RequestReceiver.Domain.Entities;
using System.Linq;
using System;
using RequestReceiver.Domain.DTO.Order;
using System.Collections.Generic;
using AutoMapper;

namespace RequestReceiver.Service.Services
{
    public class OrderService : IOrderService
    {
        private readonly IMapper _mapper;
        private readonly IOrderRepository _OrderRepository;

        public OrderService(IOrderRepository OrderRepository, IMapper mapper)
        {
            _OrderRepository = OrderRepository;
            _mapper = mapper;
        }

        public void Add(Order obj)
        {
            obj.CreationDate = DateTime.Now;

            foreach (var item in obj.OrderItems)
                item.OrderId = obj.Id;

            _OrderRepository.Add(obj);
        }

        public List<OrderGetDTO> GetOrderByNumberWith(string number)
        {
            return _OrderRepository.GetAll().Where(x => x.Number.Contains(number)).Select(obj => _mapper.Map<Order, OrderGetDTO>(obj)).ToList();
        }

        public OrderGetDetailDTO GetById(Guid id)
        {
            var obj = _OrderRepository.GetById(id);           
            var dto = new OrderGetDetailDTO()
            {
                Id = obj.Id,
                CreationDate = obj.CreationDate,
                Number = obj.Number,
                OrderItems = obj.OrderItems.Select(x => new OrderGetDetailItemDTO()
                {
                    Id = x.Id,
                    OrderId = x.OrderId,
                    Product = new OrderGetDetailProductDTO()
                    {
                        Id = x.Product.Id,
                        Name = x.Product.Name,
                        Multiple = x.Product.Multiple,
                        UnitPrice = x.Product.UnitPrice
                    },
                    Quantity = x.Quantity,
                    UnitPrice = x.UnitPrice
                }).ToList()
            };
            return dto;
        }

        public void Remove(Guid id)
        {
            _OrderRepository.Remove(id);
        }

        public void Update(Order obj)
        {
            _OrderRepository.Update(obj);
        }

        public void Dispose()
        {
            _OrderRepository.Dispose();
        }
    }
}
