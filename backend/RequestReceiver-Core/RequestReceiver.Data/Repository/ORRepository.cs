using Microsoft.EntityFrameworkCore;
using RequestReceiver.Data.Context;
using RequestReceiver.Domain.Interfaces;
using System;
using System.Linq;

namespace RequestReceiver.Data.Repository
{
    public class ORRepository<TEntity> : IORRepository<TEntity> where TEntity : class
    {
        protected readonly ORContext Db;
        protected readonly DbSet<TEntity> DbSet;

        public ORRepository(ORContext context)
        {
            Db = context;
            DbSet = Db.Set<TEntity>();
        }

        public virtual void Add(TEntity obj)
        {
            DbSet.Add(obj);
        }

        public virtual TEntity GetById(Guid id)
        {
            return DbSet.Find(id);
        }

        public virtual IQueryable<TEntity> GetAll()
        {
            return DbSet;
        }

        public virtual void Update(TEntity obj)
        {
            DbSet.Update(obj);
        }

        public virtual void Remove(Guid id)
        {
            DbSet.Remove(DbSet.Find(id));
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        public void Dispose()
        {
            Db.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
