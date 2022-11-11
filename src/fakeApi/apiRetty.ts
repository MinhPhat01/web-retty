import { createServer } from 'miragejs';

export const setupServer = () => {
  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/retty', () => {
        return {
          retty: {
            courses: [
              {
                id: 1,
                title: 'Restaurant 1',
                thumbnail:
                  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80',
                price: 1000,
              },
              {
                id: 2,
                title: 'Restaurant 2',
                thumbnail:
                  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
                price: 2500,
              },
              {
                id: 3,
                title: 'Restaurant 3',
                thumbnail:
                  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                price: 300,
              },
              {
                id: 4,
                title: 'Restaurant 4',
                thumbnail:
                  'https://plus.unsplash.com/premium_photo-1663855531298-658e61acd240?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                price: 320,
              },
              {
                id: 5,
                title: 'Restaurant 5',
                thumbnail:
                  'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                price: 310,
              },
            ],
            seats: [
              {
                id: 1,
                numberPeople: 3,
                seats: [
                  {
                    title: 'Smoking Room for 3 people',
                    thumbnail:
                      'https://plus.unsplash.com/premium_photo-1664392411821-4300b423737b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                  },
                  {
                    title: 'Private Room for 3 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
                  },
                  {
                    title: 'Smoking Room for 3 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1617098709804-705581f844eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                  },
                ],
              },
              {
                id: 2,
                numberPeople: 2,
                seats: [
                  {
                    title: 'Dining Room for 2 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  },
                  {
                    title: 'Private Room for 2 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1615920606214-6428b3324c74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                  },
                ],
              },
              {
                id: 3,
                numberPeople: 1,
                seats: [
                  {
                    title: 'Dining Room for 1 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1594568773147-a072c75e71c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  },
                ],
              },
              {
                id: 4,
                numberPeople: 4,
                seats: [
                  {
                    title: 'Dining Room for 4 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=804&q=80',
                  },
                  {
                    title: 'Smoking Room for 4 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  },
                ],
              },
              {
                id: 5,
                numberPeople: 5,
                seats: [
                  {
                    title: 'Dining Room for 5 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1636138388621-258a72ecb07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  },
                  {
                    title: 'Smoking Room for 5 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1572297259518-0974576b6738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                  },
                  {
                    title: 'Private Room for 5 people',
                    thumbnail:
                      'https://images.unsplash.com/photo-1600488999806-8efb986d87b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                  },
                ],
              },
            ],
          },
        };
      });
    },
  });
};