import { useEffect, useState } from "react"
import { getActions } from "../api/actions.api"
import type { Action } from "../api/actions.api"
import { CreateActionModal } from "../components/CreateActionModal"
import { Header } from "../components/Header"
import { Sidebar } from "../components/sidebar"
import "../styles/dashboard.css"

type ActionRow = Action & {
  description: string
}

export const Dashboard = () => {
  const [actions, setActions] = useState<ActionRow[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [showModal, setShowModal] = useState(false)

  const loadActions = async () => {
    setLoading(true)
    setError("")

    try {
      const response = await getActions(pageNumber, 10)
      const list = response?.data?.data ?? []

      const mapped: ActionRow[] = list.map(
        (item: any, index: number) => ({
          id: index + (pageNumber - 1) * 10,
          name: item.name ?? "",
          status:
            item.status === 1 || item.status === "ACTIVE" ? 1 : 0,
          createdAt: item.createdAt ?? "",
          description: item.description ?? "",
        })
      )

      setActions(mapped)
    } catch {
      setError("Error cargando acciones")
      setActions([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadActions()
  }, [pageNumber])

  return (
    <div className="dashboard-layout">
      <Header />
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Acciones</h1>
            <button onClick={() => setShowModal(true)}>
              Crear acción
            </button>
          </div>

          {loading && <p>Cargando...</p>}
          {error && <p className="error">{error}</p>}

          <table className="actions-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {!loading && actions.length === 0 && (
                <tr>
                  <td colSpan={3}>No hay acciones</td>
                </tr>
              )}

              {actions.map((action) => (
                <tr key={action.id}>
                  <td>{action.name}</td>
                  <td>{action.description}</td>
                  <td>
                    {action.status === 1 ? "Activa" : "Inactiva"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button
              disabled={pageNumber === 1}
              onClick={() => setPageNumber((p) => p - 1)}
            >
              Anterior
            </button>

            <span>Página {pageNumber}</span>

            <button
              disabled={actions.length < 10}
              onClick={() => setPageNumber((p) => p + 1)}
            >
              Siguiente
            </button>
          </div>

          {showModal && (
            <CreateActionModal
              onClose={() => setShowModal(false)}
              onCreated={() => {
                setPageNumber(1)
                loadActions()
              }}
            />
          )}
        </div>
      </main>
    </div>
  )
}
